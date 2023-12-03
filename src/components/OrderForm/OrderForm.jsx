import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { appStateActions } from '../../store/slices/appStateSlice'
import { useSendOrderMutation } from '../../store/catalogFetchAPI'

export  function OrderForm() {
    const dispatch = useDispatch()
    const { orderForm: {phone, address, agreement}} = useSelector(store=>store.appState)
    const { items} = useSelector(store=>store.cart)
    const [sendOrder, data] = useSendOrderMutation()


    const handleSubmit = async(e)=> {
        e.preventDefault()
        const order = {
            "owner": {
              "phone": phone,
              "address": address,
            },
            "items": items
          }
        sendOrder(JSON.stringify(order)).unwrap()
    }

    const handleChangePhone =({target:{value}})=>{
        dispatch(appStateActions.changeOrderPhone(value))
    }

    const handleChangeAddress =({target:{value}})=>{
        dispatch(appStateActions.changeOrderAddress(value))
    }

    const handleChangeAgreemnt =(e)=>{
        dispatch(appStateActions.changeOrderAgreement(e.target.checked))
    }

    return (
        <div className="card" style={{maxWidth: 30+'rem', margin: '0 auto' }}>
            <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="phone">Телефон</label>
                    <input className="form-control" id="phone" placeholder="Ваш телефон" onChange={handleChangePhone} value={phone} name='phone'/>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Адрес доставки</label>
                    <input className="form-control" id="address" placeholder="Адрес доставки" onChange={handleChangeAddress} value={address} name='address'/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="agreement" name='agreement' onChange={handleChangeAgreemnt}/>
                    <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                </div>
                <button type="submit" className="btn btn-outline-secondary" disabled={!agreement}>Оформить</button>
            </form>
        </div>
    )
}
