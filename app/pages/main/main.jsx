import React, { useEffect, useState } from 'react';
import { Card, Header, AddNewCard } from '@/app/components';
import './main.css';

const Main = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(SAMPLE_ITEMS);
    }, []);

    return (
        <>
            <Header title="Warhammer Gallery" />
            <div className="main-container">
                {items.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
                <AddNewCard />
            </div>
        </>
    );
};

const SAMPLE_ITEMS = [
    {
        id: 1,
        name: 'sample_item1',
    },
    {
        id: 2,
        name: 'sample_item2',
    },
];

export default Main;
