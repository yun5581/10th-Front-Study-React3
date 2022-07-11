import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = () => {
	const [users, setUsers] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		// 요청을 시작 할 때, users을 null로 초기화하세요 (setUsers를 사용) >>
		setUsers(null);
		const response = await axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				// 콘솔에 reponse를 출력해보세요 >>
				console.log(response.data);
				// response.data 속 유저 데이터를 setUsers 함수를 사용해 배열에 저장하세요 >>
				setUsers(response.data);
			})
			.catch(error => {
				// 잘못된 주소로 fetch를 시도했을 때 콘솔에 에러 메세지가 뜨도록 작성하세요 >>
				console.log('error');
			});
	};

	// users가 비어있을 때 출력되도록 if 괄호 안을 채우세요 >>
	// if () return <p>데이터 fetch 시도 중</p>;

	return (
		<>
			<ul>
				{users.map(user => (
					<li key={user.id}>
						{user.username} ({user.name})
					</li>
				))}
			</ul>
			<button onClick={fetchData}>데이터 다시 불러오기</button>
		</>
	);
};

export default API;
