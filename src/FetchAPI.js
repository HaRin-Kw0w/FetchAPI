import { useEffect, useState } from "react";

function FetchAPI(){
	//Fatch Object 정보
	//error : null, 에러인지 아닌지에 대한 정보 
	//isLoaded: null, 로딩이 되었는지 아닌지에 대한 정보
	//data: [], 데이터 정보 

	//로딩이 되면 srate정보를 바꿀것이다. 정보가 바뀌면 화면을 다시 그려야 하므로 state를 사용해야한다 
	//state의 내용은 Fetch Object의 내용을 따라 만든것
	let [state, setState]=useState({
		error : null,
		isLoaded: false,
		data: null
	});

	// let variables=100;
	// let [variables, setVar]=useState(100);  //variables의 데이터를 바꾸려면 뒤의 setVar의 변수를 변경해야 적용 된다 

	useEffect(()=>{
		// // variables=200;
		// setVar(200);

		setTimeout(function(){
			fetch("/data/data.json")
			//자바스크립트 방식의 비동기 코드
			//then() 실행문이 완성되고 다음 코드로 실행된다.

			//원시 데이터를 객체 형식으로 바꾸어 주는 것 //fetch에만 사용
			.then(res => res.json()) 

			// res(): 성공, error():실패
			.then(
				res => { 
					//Fatch Object 그대로 대입, res는 들어온 정보  
					setState({
						error : null,
						isLoaded: true,
						data: res.data
					});
				},  
				err =>{
					//Fatch Object 그대로 대입, error에 대한 메세지 
					setState({
						error: err,
						isLoaded: true,
						data: []
					});
				}
			);
		}, 2000);
	},[]); //state정보는 어떤 것도 업데이트 하지 않는다 
	//FetchAPI()> return() > useEffect > FetchAPI()> return() 
	
	//콜백 스트테이트 값을 등록하지 않으면 다음과 같다
	//defatult: }, [state]);
	//console.log(state.data);

	/*
	return(
		<ul>
			{
				data.map((d, i) =>
					<li key={i+1}>{d.name} : {d.price}</li>
				)
			} }
		</ul>
	);
	*/
	let {error, isLoaded, data}=state;
	
	console.log(error, isLoaded, data) // 2회차에 정상 로딩

	if(error){
		return(
			<div>Error: {error.message}</div>
		);
	}

	if(!isLoaded){
		return(
			<div>Loading..</div>
		);
	}
	else{
		return(
			<ul>
				{
					data.map((d, i) =>
						<li key={i+1}>{d.name} : {d.price}</li>
					)
				} 
			</ul>
		)
	}
	
}

export default FetchAPI;