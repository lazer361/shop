import React from 'react';
import style from "./OrderForm.scss";
import { SearchContext } from '../../App';


const OrderForm = () => {
    const {purchases} = React.useContext(SearchContext);
    const [formName, setFormName] = React.useState('');
    const [formCity, setFormCity] = React.useState('');
    const [formStreet, setFormStreet] = React.useState('');
    const [formHome, setFormHome] = React.useState('');
    const [formFlat, setFormFlat] = React.useState('');
    const [formFloor, setFormFloor] = React.useState('');
    const [formEntrance, setFormEntrance] = React.useState('');
    const [formIntercom, setFormIntercom] = React.useState('');
    const [formcomment, setFormcomment] = React.useState('');

    // function checkEmpty(value, input) {
    //     if(value == '') {
    //         let er = `Поле ${input} не заполнено!`;
    //         return er;
    //     }
    // }

    const checkForm = () => {
        
        // const input = [formName, formCity, formStreet, formHome, formFlat, formFloor, formEntrance, formIntercom, formcomment];
        // const text = ['Имя', 'Город', 'Улица', 'Дом', 'Квартира', 'Этаж', 'Подъезд', 'Домофон', 'Комментарий'];
        // let error = '';
        if(purchases.length == 0) {
            alert('Корзина пуста !');
            document.location.href = '/';
        }else {
            alert('Заказ отправлен :)');
            document.location.href = '/';
        }
        // alert(formName);
        // alert(formCity);
        // alert(formStreet);
        // alert(formHome);
        // alert(formFlat);
        // alert(formFloor);
        // alert(formEntrance);
        // alert(formIntercom);
        // alert(formcomment);
    }

    return (
            <form className="order_form">
                <h2 className='order_title'>Заказ</h2>
                <div className='order_wrap'>
                    <label htmlFor="name">Имя</label>
                    <input type="text" id='name' value={formName} onChange={(event) => setFormName(event.target.value)}/>
                </div>

                <div className='order_wrap'>
                    <label htmlFor="сity">Город</label>
                    <input type="text" id='сity' value={formCity} onChange={(event) => setFormCity(event.target.value)}/>
                </div>
                
                <div className='order_wrap'>
                    <label htmlFor="street">Улица</label>
                    <input type="text" id='street' value={formStreet} onChange={(event) => setFormStreet(event.target.value)}/>
                </div>

                <div className='order_group'>
                    <div className='order_wrap'>
                        <label htmlFor="home">Дом</label>
                        <input type="number" id='home' value={formHome} onChange={(event) => setFormHome(event.target.value)}/>
                    </div>
                    <div className='order_wrap'>
                        <label htmlFor="flat">Квартира</label>
                        <input type="number" id='flat' value={formFlat} onChange={(event) => setFormFlat(event.target.value)}/>
                    </div>
                </div>
                <div className='order_group'>
                    <div className='order_wrap'>
                        <label htmlFor="floor">Этаж</label>
                        <input type="number" id='floor' value={formFloor} onChange={(event) => setFormFloor(event.target.value)}/>
                    </div>
                    <div className='order_wrap'>
                        <label htmlFor="entrance">Подъезд</label>
                        <input type="number" id='entrance' value={formEntrance} onChange={(event) => setFormEntrance(event.target.value)}/>
                    </div>
                    <div className='order_wrap'>
                        <label htmlFor="intercom">Домофон</label>
                        <input type="number" id="intercom" value={formIntercom} onChange={(event) => setFormIntercom(event.target.value)}/>
                    </div>
                </div>
                <div className='order_wrap'>
                        <label htmlFor="comment">Комментарий</label>
                        <textarea name="" id="comment" cols="30" rows="10"  value={formcomment} onChange={(event) => setFormcomment(event.target.value)}>
                </textarea>
                    </div>
                
                <a onClick={checkForm} className='btnPay'>Заказать</a>
            </form>
    );
}

export default OrderForm;