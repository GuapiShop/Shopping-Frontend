import React, { useState } from "react";
import Input from "../atoms/input";
import Button from "../atoms/button";
import SelectLabeled from "./selectLabeled";
import { getCabys } from "../../services/cabysService";
import type { Cabys } from "../../models/cabys";
import type { ProductUpdateDTO } from "../../models/Product";

type SearchCabysProps = {
    setData: React.Dispatch<React.SetStateAction<ProductUpdateDTO>>;
}

const SearchCabys: React.FC<SearchCabysProps> = ({ 
    setData,
}) => {
    const [search, setSearch] = useState("");
    const [selectedCabys, setSelectedCabys] = useState<string>("");
    const [cabysData, setCabysData] = useState<Cabys> ({
        cabys: [],
        quantity: 0,
        total: 0
    });

    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {        
        const { value } = event.target; 
        setSearch(value);
    }

    const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target; 

        setSelectedCabys(value);
        const selected = cabysData.cabys.find(cabys => cabys.code === value);
        if (selected) {
            setData((prev) => ({
                ...prev,
                codeCabys: selected.code,
                descriptionCabys: selected.description,
                taxCabys: selected.tax
            }));
        }
    }
    
    const searchCabys = async() => {
        const data = await getCabys(search);
        if (data && data.quantity > 0) {
            setCabysData({
                cabys: data.products.map((product:any) => ({
                    code: product.codigo,
                    description: product.descripcion,
                    tax: product.impuesto
                })),
                quantity: data.quantity,
                total: data.total
            });
        }
    }

    return (
        <div className="my-4">
            <div className="flex items-end space-x-4 mb-4">
                <Input 
                    name="search"
                    type="text"
                    placeholder="Enter the product to search for"
                    value={search}
                    onChange={onChangeSearch}  
                />
                <Button
                    label="Search"
                    onClick={searchCabys} 
                />
            </div>

            <SelectLabeled
                name="codeCabys"
                label="Code Cabys"
                message="Cabys"
                options={
                    cabysData.cabys.map((cabys) => ({
                        value: cabys.code,
                        label: `${cabys.code} - ${cabys.description} - ${cabys.tax}%`
                    }))
                }
                value={selectedCabys}
                onChange={onChangeSelect}
            />
        </div>
    );
}

export default SearchCabys;