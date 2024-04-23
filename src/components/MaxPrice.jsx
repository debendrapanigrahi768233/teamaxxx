import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

const categoryItem = [
    {
        "name": "Chai flavors",
        "item": [
            {
                "name": "Regular chai",
                "price": 15
            },
            {
                "name": "Kadak ginger chai",
                "price": 15
            },
            {
                "name": "Masala chai",
                "price": 20
            },
            {
                "name": "Lemon chai",
                "price": 20
            },
            {
                "name": "Rose chai",
                "price": 20
            },{
                "name": "Kulhad chai",
                "price": 20
            },

        ]
    },
    {
        "name": "Hot coffee",
        "item": [
            {
                "name": "Hot coffee",
                "price": 25
            },
            {
                "name": "Max cappuccino",
                "price": 49
            },
            {
                "name": "Chocolate coffee",
                "price": 49
            },
            {
                "name": "Hazelnut coffee",
                "price": 49
            },

        ]
    },
    {
        "name": "Milkshakes",
        "item": [
            {
                "name": "Vanilla",
                "price": 59
            },
            {
                "name": "Mango",
                "price": 69
            },
            {
                "name": "Strawberry",
                "price": 69
            },
            {
                "name": "Badam",
                "price": 69
            },
            {
                "name": "Banana",
                "price": 69
            },
            {
                "name": "Butterscotch",
                "price": 79
            },
            {
                "name": "Chocolate",
                "price": 79
            },
            {
                "name": "Pista shake",
                "price": 79
            },
            {
                "name": "Oreo",
                "price": 79
            },
            {
                "name": "Butter fruit / avocado",
                "price": 89
            },
            {
                "name": "Kitkat shake",
                "price": 89
            },
            {
                "name": "Dry Fruit milkshake",
                "price": 89
            },
        ]
    },
    {
        "name": "Mojito",
        "item": [
            {
                "name": "Lemon juice (sweet/salt)",
                "price": 29
            },
            {
                "name": "Lemon soda",
                "price": 39
            },
            {
                "name": "Virgin mojito",
                "price": 49
            },
            {
                "name": "Blue curacao",
                "price": 59
            },
            {
                "name": "Watermelon mojito",
                "price": 59
            },
            {
                "name": "Green mint mojito",
                "price": 59
            },
            {
                "name": "Green apple mojito",
                "price": 59
            }
        ]
    },
    {
        "name": "Cold coffee",
        "item": [
            {
                "name": "Cold coffee",
                "price": 69
            },
            {
                "name": "Cold coffee with ice-cream",
                "price": 89
            },
            {
                "name": "Cold coffee with oreo",
                "price": 89
            },
        ]
    },
    {
        "name": "Thick shakes",
        "item": [
            {
                "name": "Vanilla thickshake",
                "price": 89
            },
            {
                "name": "Butterscotch thickshake",
                "price": 99
            },
            {
                "name": "Caramel thickshake",
                "price": 99
            },
            {
                "name": "Kitkat thickshake",
                "price": 109
            },
            {
                "name": "Mango thickshake",
                "price": 109
            },
            {
                "name": "Strawberry thickshake",
                "price": 119
            },
            {
                "name": "Chocolate thickshake",
                "price": 129
            },
            {
                "name": "Death by chocolate",
                "price": 129
            },
        ]
    },
    {
        "name": "Lassi",
        "item": [
            {
                "name": "Sweet Lassi",
                "price": 49
            },
            {
                "name": "Kulhad Lassi",
                "price": 59
            },
            {
                "name": "Mango Lassi",
                "price": 59
            },
            {
                "name": "Chocolate Lassi",
                "price": 69
            },
            {
                "name": "Dry fruit Lassi",
                "price": 89
            },
        ]
    },
    
    {
        "name": "Burger Veg",
        "item": [
            {
                "name": "Classic Burger",
                "price": 69
            },
            {
                "name": "Tandoori Burger",
                "price": 79
            },
            {
                "name": "BBQ Burger",
                "price": 79
            },
            {
                "name": "Peri Peri Burger",
                "price": 79
            },
            {
                "name": "Max Burger",
                "price": 89
            },
        ]
    },
    {
        "name": "Burger Paneer",
        "item": [
            {
                "name": "Classic Burger",
                "price": 89
            },
            {
                "name": "Tandoori Burger",
                "price": 99
            },
            {
                "name": "BBQ Burger",
                "price": 99
            },
            {
                "name": "Peri Peri Burger",
                "price": 99
            },
            {
                "name": "Max Burger",
                "price": 109
            },
        ]
    },
    {
        "name": "Burger Chicken",
        "item": [
            {
                "name": "Classic Burger",
                "price": 79
            },
            {
                "name": "Tandoori Burger",
                "price": 89
            },
            {
                "name": "BBQ Burger",
                "price": 89
            },
            {
                "name": "Peri Peri Burger",
                "price": 89
            },
            {
                "name": "Max Burger",
                "price": 109
            },
            {
                "name": "Fried Zinger Chicken Burger",
                "price": 129
            },
        ]
    },
    {
        "name": "Vadapav",
        "item": [
            {
                "name": "Classic Vadapav",
                "price": 39
            },
            {
                "name": "Mumbai Vadapav",
                "price": 49
            },
            {
                "name": "Peri Peri Vadapav",
                "price": 49
            },
            {
                "name": "Cheese Vadapav",
                "price": 59
            },
        ]
    },
    {
        "name": "Maggi",
        "item": [
            {
                "name": "Veg Masala Maggi",
                "price": 49
            },
            {
                "name": "Cheesy Maggi",
                "price": 59
            },
            {
                "name": "Kulhad Cheesy Maggi",
                "price": 59
            },
            {
                "name": "Butter Masala Maggi",
                "price": 59
            },
            {
                "name": "Egg Maggi",
                "price": 69
            },
            {
                "name": "Paneer Maggi",
                "price": 69
            },
        ]
    },
    {
        "name": "Falooda",
        "item": [
            {
                "name": "Rose Falooda",
                "price": 99
            },
            {
                "name": "Mango Falooda",
                "price": 99
            },
            {
                "name": "Keshar Pista Falooda",
                "price": 109
            },
            {
                "name": "Strawberry Falooda",
                "price": 109
            },
        ]
    },
    {
        "name": "French Fries",
        "item": [
            {
                "name": "Classic Fries",
                "price": 59
            },
            {
                "name": "Pepper Fries",
                "price": 69
            },
            {
                "name": "Masala Fries",
                "price": 69
            },
            {
                "name": "Peri Peri Fries",
                "price": 79
            },
        ]
    },
    {
        "name":"Ice Cream",
        "item": [
            {
                "name": "Vanilla",
                "price": 70
            },
            {
                "name": "Strawberry",
                "price": 70
            },
            {
                "name": "Chocolate",
                "price": 80
            },
            {
                "name": "Kulfi",
                "price": 80
            },
            {
                "name": "Butterscotch",
                "price": 80
            },
            {
                "name": "Black Currant",
                "price": 80
            },
            {
                "name": "Fruit Salad With IceCream",
                "price": 90
            },
            {
                "name": "Sizzling Brown With IceCream",
                "price": 120
            },
        ]
    },
    {
        "name":"Sandwich",
        "item": [
            {
                "name": "Veg Grill Sandwich",
                "price": 59
            },
            {
                "name": "Sweet Corn Sandwich",
                "price": 69
            },
            {
                "name": "Tandoori Grill Sandwich",
                "price": 79
            },
            {
                "name": "Max Paneer Sandwich",
                "price": 79
            },
            {
                "name": "Tandoori Paneer Sandwich",
                "price": 89
            },
            {
                "name": "Chicken Grill Sandwich",
                "price": 89
            },
            {
                "name": "Tandoori Chicken Sandwich",
                "price": 89
            },
        ]
    },
    {
        "name":"Pasta Veg",
        "item": [
            {
                "name": "White Sauce Pasta",
                "price": 99
            },
            {
                "name": "Red Sauce Pasta",
                "price": 89
            },
        ]
    },
    {
        "name":"Pasta Non-Veg",
        "item": [
            {
                "name": "White Sauce Pasta",
                "price": 119
            },
            {
                "name": "Red Sauce Pasta",
                "price": 109
            },
        ]
    },
    {
        "name":"Pizza",
        "item": [
            {
                "name": "Veg Farmhouse Pizza",
                "price": 149
            },
            {
                "name": "Paneer Pizza",
                "price": 139
            },
            {
                "name": "Peri Peri chicken Pizza",
                "price": 169
            },
            {
                "name": "Chicken Tikka Pizza",
                "price": 149
            },
        ]
    },
    
    {
        "name":"Max Pro Snacks",
        "item": [
            {
                "name": "Veg cheese balls",
                "price": 69
            },
            {
                "name": "Spiral Potato Twister",
                "price": 69
            },
            {
                "name": "Peri Peri Potato Twister",
                "price": 79
            },
            {
                "name": "Chicken Cutlet",
                "price": 79
            },
            {
                "name": "Fried Momos",
                "price": 80
            },
            {
                "name": "Chicken Cheese Balls",
                "price": 89
            },
            {
                "name": "Chicken Popcorn",
                "price": 89
            },
            {
                "name": "Fried chicken momos",
                "price": 89
            },
            {
                "name": "Kurkure veg momos",
                "price": 119
            },
            {
                "name": "Shezwan veg momos",
                "price": 119
            },
            {
                "name": "Kurkure chicken momos",
                "price": 129
            },
            {
                "name": "Shezwan Chicken momos",
                "price": 129
            },
            {
                "name": "Crunchy Chicken Wings",
                "price": 139
            },
            {
                "name": "Chicken Strips",
                "price": 149
            },
            {
                "name": "Peri Peri Chicken Strips",
                "price": 159
            },
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
