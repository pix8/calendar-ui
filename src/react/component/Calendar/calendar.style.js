import styled from 'styled-components'


const StyledCalendar = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const StyledMonth = styled.dl`
	flex-basis: auto;
	background: gold;
	width: 28%;
	margin: 20px;
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
