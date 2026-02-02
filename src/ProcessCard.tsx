interface ProcessCardProps {
    title: string;
    process: {
        id: string;
        name: string;
        running_time_formatted: string;
        memory_in_bytes: number;
    };
}

const ProcessCard: React.FC<ProcessCardProps> = ({ title, process }) => {
    return (
        <div className="process-card">
            <h2>{title}</h2>
            <p><strong>Process ID:</strong> {process.id}</p>
            <p><strong>Process Name:</strong> {process.name}</p>
            <p><strong>Running Time:</strong> {process.running_time_formatted}</p>
            <p><strong>Memory Usage:</strong> {process.memory_in_bytes} bytes</p>
        </div>
    );
};

export default ProcessCard;