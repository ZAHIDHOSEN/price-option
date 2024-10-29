import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const mathMarkData = [
        { id: 1, name: "Alice", mathMark: 75, physicsMark: 82, chemistryMark: 78 },
        { id: 2, name: "Bob", mathMark: 88, physicsMark: 90, chemistryMark: 85 },
        { id: 3, name: "Charlie", mathMark: 92, physicsMark: 91, chemistryMark: 89 },
        { id: 4, name: "David", mathMark: 68, physicsMark: 74, chemistryMark: 70 },
        { id: 5, name: "Eve", mathMark: 80, physicsMark: 85, chemistryMark: 82 },
        { id: 6, name: "Frank", mathMark: 95, physicsMark: 93, chemistryMark: 96 },
        { id: 7, name: "Grace", mathMark: 78, physicsMark: 80, chemistryMark: 76 },
        { id: 8, name: "Hannah", mathMark: 85, physicsMark: 88, chemistryMark: 84 },
        { id: 9, name: "Ian", mathMark: 90, physicsMark: 92, chemistryMark: 89 },
        { id: 10, name: "Julia", mathMark: 72, physicsMark: 75, chemistryMark: 70 }
    ];
    

    
    return (
        <div>
            <LChart width={800} height={400} data={mathMarkData}>
                <XAxis dataKey="name"/>
                <YAxis></YAxis>
                <Line type="monotone" dataKey="mathMark" stroke ="red" ></Line>
                <Line dataKey={'physicsMark'}></Line>

            </LChart>
        </div>
    );
};

export default LineChart;