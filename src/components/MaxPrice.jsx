import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

const categoryItem = [
    {
        "name": "pizza",
        "item": [
            {
                "name": "Veg grill",
                "price": 59
            }
        ]
    },
    {
        "name": "tea",
        "item": [
            {
                "name": "Regular",
                "price": 15
            }
        ]
    },
];

const MaxPrice = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [tableNumber, setTableNumber] = useState('Table 1');
    const [tableOrders, setTableOrders] = useState({});
    const [orderHistory, setOrderHistory] = useState([]);

    const addItem = (categoryName, itemName, price) => {
        const itemIndex = selectedItems.findIndex(item => item.itemName === itemName && item.categoryName === categoryName && item.tableNumber === tableNumber);
        if (itemIndex !== -1) {
            const updatedItems = [...selectedItems];
            updatedItems[itemIndex].quantity += 1;
            setSelectedItems(updatedItems);
        } else {
            setSelectedItems([...selectedItems, { categoryName, itemName, price, quantity: 1, tableNumber }]);
        }
    };

    const removeItem = (categoryName, itemName) => {
        const updatedItems = selectedItems.map(item => {
            if (item.itemName === itemName && item.categoryName === categoryName && item.tableNumber === tableNumber) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }).filter(item => item.quantity > 0);
        setSelectedItems(updatedItems);
    };

    const totalPriceForTable = () => {
        const tableItems = selectedItems.filter(item => item.tableNumber === tableNumber);
        return tableItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const handleTableChange = (event) => {
        setTableNumber(event.target.value);
    };

    const handleOrderSubmit = () => {
        const newOrders = selectedItems.filter(item => item.tableNumber === tableNumber);
        setTableOrders({ ...tableOrders, [tableNumber]: [...(tableOrders[tableNumber] || []), newOrders] });
        setSelectedItems([]);
    };

    // const handleClearTable = (table) => {
    //     const clearedOrders = tableOrders[table] || [];
    //     setOrderHistory([...orderHistory, ...clearedOrders.flat()]);
    //     const updatedOrders = { ...tableOrders };
    //     delete updatedOrders[table];
    //     setTableOrders(updatedOrders);
    // };

    const handleClearTable = (table) => {
        const clearedOrders = tableOrders[table] || [];
        setOrderHistory([...orderHistory, { table, orders: clearedOrders.flat() }]);
        const updatedOrders = { ...tableOrders };
        delete updatedOrders[table];
        setTableOrders(updatedOrders);
    };
    

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ marginBottom: '20px', color: '#333' }}>Select Table:</h2>
            <select value={tableNumber} onChange={handleTableChange} style={{ marginBottom: '20px', padding: '8px' }}>
                <option value="Table 1">Table 1</option>
                <option value="Table 2">Table 2</option>
                <option value="Table 3">Table 3</option>
                <option value="Table 4">Table 4</option>
                <option value="Table 5">Table 5</option>
            </select>
            <div>
                {categoryItem.map(category => (
                    <div key={category.name} style={{ marginBottom: '20px' }}>
                        <h3 style={{ color: '#333', marginBottom: '10px' }}>{category.name}</h3>
                        <ul>
                            {category.item.map(item => (
                                <li key={item.name} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                    <span style={{ flex: '1', color: '#333' }}>{item.name} : {item.price}</span>
                                    <FontAwesomeIcon icon={faMinus} onClick={() => removeItem(category.name, item.name)} style={{ cursor: 'pointer', marginRight: '5px' }} />
                                    <span style={{ margin: '0 5px', color: '#333' }}>{selectedItems.find(selItem => selItem.itemName === item.name && selItem.categoryName === category.name && selItem.tableNumber === tableNumber)?.quantity || 0}</span>
                                    <FontAwesomeIcon icon={faPlus} onClick={() => addItem(category.name, item.name, item.price)} style={{ cursor: 'pointer', marginRight: '5px' }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <h3 style={{ color: '#333', marginBottom: '10px' }}>Total Price for {tableNumber}:</h3>
                <table style={{ borderCollapse: 'collapse', width: '100%', marginBottom: '20px' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #333', padding: '8px', color: '#333' }}>Item Name</th>
                            <th style={{ border: '1px solid #333', padding: '8px', color: '#333' }}>Quantity</th>
                            <th style={{ border: '1px solid #333', padding: '8px', color: '#333' }}>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedItems.map((item, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid #333', padding: '8px', color: '#333' }}>{item.itemName}</td>
                                <td style={{ border: '1px solid #333', padding: '8px', color: '#333' }}>{item.quantity}</td>
                                <td style={{ border: '1px solid #333', padding: '8px', color: '#333' }}>{item.price * item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p style={{ color: '#333' }}>Total: {totalPriceForTable()}</p>
                <button onClick={handleOrderSubmit} style={{ padding: '10px 20px', background: '#333', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>Submit Order for {tableNumber}</button>
            </div>
            <div style={{ marginTop: '20px' }}>
            <h3 style={{ color: '#333', marginBottom: '10px' }}>Orders:</h3>
    {Object.keys(tableOrders).map(table => (
        <div key={table} style={{ marginBottom: '20px' }}>
            <div style={{ background: '#f0f0f0', padding: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                <h4 style={{ color: '#333', marginBottom: '10px' }}>Table {table}</h4>
                <button onClick={() => handleClearTable(table)} style={{ background: 'red', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faTrash} />
                    <span style={{ marginLeft: '5px' }}>Clear Order</span>
                </button>
            </div>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #333', padding: '8px', color: '#333' }}>Item Name</th>
                        <th style={{ border: '1px solid #333', padding: '8px', color: '#333' }}>Quantity</th>
                        <th style={{ border: '1px solid #333', padding: '8px', color: '#333' }}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {tableOrders[table].map((order, orderIndex) => (
                        <React.Fragment key={orderIndex}>
                            {order.map((item, itemIndex) => (
                                <tr key={itemIndex}>
                                    <td style={{ border: '1px solid #333', padding: '8px', color: '#333' }}>{item.itemName}</td>
                                    <td style={{ border: '1px solid #333', padding: '8px', color: '#333' }}>{item.quantity}</td>
                                    <td style={{ border: '1px solid #333', padding: '8px', color: '#333' }}>{item.price * item.quantity}</td>
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                    <tr>
                        <td colSpan="2" style={{ textAlign: 'right', fontWeight: 'bold', border: '1px solid #333', padding: '8px', color: '#333' }}>Total Price:</td>
                        <td style={{ border: '1px solid #333', padding: '8px', color: '#333' }}>
                            {tableOrders[table].reduce((total, order) => total + order.reduce((acc, item) => acc + item.price * item.quantity, 0), 0)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    ))}
            </div>
            <div style={{ marginTop: '150px' }}>
                <h3 style={{ color: '#333', marginBottom: '10px' }}>******Order History******</h3>
                {orderHistory.map((tableOrder, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <h4 style={{ color: '#333', marginBottom: '10px' }}>Table {tableOrder.table}</h4>
                        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                            <thead>
                                <tr>
                                    <th style={{ border: '1px solid #333', padding: '8px', color: '#333' }}>Item Name</th>
                                    <th style={{ border: '1px solid #333', padding: '8px', color: '#333' }}>Quantity</th>
                                    <th style={{ border: '1px solid #333', padding: '8px', color: '#333' }}>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableOrder.orders.map((item, itemIndex) => (
                                    <tr key={itemIndex}>
                                        <td style={{ border: '1px solid #333', padding: '8px', color: '#333' }}>{item.itemName}</td>
                                        <td style={{ border: '1px solid #333', padding: '8px', color: '#333' }}>{item.quantity}</td>
                                        <td style={{ border: '1px solid #333', padding: '8px', color: '#333' }}>{item.price * item.quantity}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="2" style={{ textAlign: 'right', fontWeight: 'bold', border: '1px solid #333', padding: '8px', color: '#333' }}>Total Price:</td>
                                    <td style={{ border: '1px solid #333', padding: '8px', color: '#333' }}>
                                        {tableOrder.orders.reduce((total, item) => total + item.price * item.quantity, 0)}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MaxPrice;
