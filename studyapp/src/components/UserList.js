import React from 'react';

function UserList({ users, onRemove, onToggle }) {
	// ** 배열 users를 map을 사용해 User 컴포넌트 여러개로 렌더링하세요 >>
	return (
		<div>
			{users.map(user => (
				<User
					user={user}
					key={user.id}
					onRemove={onRemove}
					onToggle={onToggle}
				/>
			))}
		</div>
	);
}

// 2~3) <b></b> 태그와 <button></button> 태그에 적절한 onClick 함수를 추가하세요 >>
function User({ user, onRemove, onToggle }) {
	return (
		<div>
			<b
				style={{
					cursor: 'pointer',
					color: user.active ? 'orange' : 'black',
				}}
				onClick={() => onToggle(user.id)}
			>
				{user.username}
			</b>
			<span>({user.email})</span>
			<button onClick={() => onRemove(user.id)}> 삭제 </button>
		</div>
	);
}

export default UserList;
