import React, { useRef, useState } from 'react';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import API from './components/API';

function App() {
	// 새롭게 들어온 inputs를 관리하는 useState입니다.
	const [inputs, setInputs] = useState({
		username: '',
		email: '',
	});

	// ** 구조분해할당으로 inputs에서 username과 email 값을 구하세요 >>
	const { username, email } = inputs;
	// ** input onChange 함수를 구현하세요 >>
	// ** e.target에서 구조분해할당으로 name과 value를 구하세요 >>
	// ** 구한 name과 value로 inputs를 수정하세요 >>
	const onChange = e => {
		const { name, value } = e.target;
		setInputs({
			...inputs,
			[name]: value,
		});
	};
	// users 배열
	const [users, setUsers] = useState([
		{
			id: 1,
			username: '다윤',
			email: 'test1@likelion.org',
			active: false,
		},
		{
			id: 2,
			username: '혜빈',
			email: 'test2@likelion.org',
			active: false,
		},
		{
			id: 3,
			username: '도연',
			email: 'test3@likelion.org',
			active: false,
		},
	]);

	// 1) useRef를 사용해 nextId를 선언하세요 (기본값은 4부터 시작합니다) >>
	const nextId = useRef(4);
	// 1) 새롭게 들어온 user를 users 배열에 추가하는 함수 onCreate를 구현하시오 >>
	const onCreate = () => {
		// 새롭게 들어온 user 객체를 const로 선언하시오 >>
		// 새로운 user를 추가하세요 (스프레드 문법 / concat 문법) >>
		// input 창을 비우세요 >>
		// nextid를 1 증가시키세요 >>
		const user = {
			id: nextId.current,
			username,
			email,
		};
		setUsers(users.concat(user));

		setInputs({
			username: '',
			email: '',
		});
		nextId.current += 1;
	};

	// 2) 요소를 삭제하는 onRemove 함수를 구현하세요 >>
	const onRemove = id => {
		// filter를 사용해 선택된 id의 user요소를 삭제하세요 >>
		setUsers(users.filter(user => user.id !== id));
	};

	// 3) 토글하면 active 상태를 바꾸는 onToggle 함수를 구현하세요 >>
	const onToggle = id => {
		setUsers(
			users.map(user =>
				user.id === id ? { ...user, active: !user.active } : user
			)
		);
	};

	// ** 아래 CreateUser 컴포넌트에서 필요한 props 2개를 추가하세요 >>
	return (
		<>
			<CreateUser
				username={username}
				email={email}
				onChange={onChange}
				onCreate={onCreate}
			/>

			<UserList users={users} onRemove={onRemove} onToggle={onToggle} />

			<hr />

			<API />
		</>
	);
}

export default App;
