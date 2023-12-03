import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { appStateActions } from '../../store/slices/appStateSlice'

export  function Count() {
	const dispatch = useDispatch()
	const { count} = useSelector(store=> store.appState)




	return (
	<p>Количество: 
		<span className="btn-group btn-group-sm pl-2">
			<button className="btn btn-secondary" onClick={()=>dispatch(appStateActions.decrementcount())}>-</button>
			<span className="btn btn-outline-primary">{count}</span>
			<button className="btn btn-secondary" onClick={()=>dispatch(appStateActions.incrementcount())}>+</button>
		</span>
	</p>
	)
}
