import styled from 'styled-components'


const StyledCalendar = styled.div`
	background: whitesmoke;
	display: flex;
	flex-wrap: wrap;
`;

const StyledMonth = styled.dl`
	flex-basis: auto;
	width: calc(100%/3);
	padding-left: 20px;
	padding-right: 20px;
	margin-top: 0;
	margin-bottom: 0;
`;

const StyledDay = styled.li`
	flex-basis: calc(100%/7);
	margin: 0;
	text-align: center;
`;

export {
	StyledCalendar,
	StyledMonth,
	StyledDay
}
