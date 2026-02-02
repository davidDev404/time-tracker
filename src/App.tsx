import { invoke } from '@tauri-apps/api/core';
import { useEffect, useState } from 'react';
import ProcessCard from './ProcessCard.tsx';
import "./App.css";

interface ProcessInfo {
    id: string;
    name: string;
    running_time_formatted: string;
    memory_in_bytes: number;
}

const App: React.FC = () => {
  const [processList, setProcessList] = useState<ProcessInfo[]>([]);
  const [maxMemoryProcess, setMaxMemoryProcess] = useState<ProcessInfo | null>(null);
  const [maxRunningProcess, setMaxRunningProcess] = useState<ProcessInfo | null>(null);

  useEffect(() => {
    async function fetchData() {
    const processList = await invoke<ProcessInfo[]>('list_process');
    const maxMemoryProcess = await invoke<ProcessInfo | null>('max_memory');
    const maxRunningProcess = await invoke<ProcessInfo | null>('max_running_process');

    setMaxMemoryProcess(maxMemoryProcess);
    setMaxRunningProcess(maxRunningProcess);
    setProcessList(processList);
    }
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className='container'>
      { maxMemoryProcess && <ProcessCard title="Maximum Memory Process" process={maxMemoryProcess} />}
      { maxRunningProcess && <ProcessCard title="Maximum Running Process" process={maxRunningProcess} />}  

      <div className="process-list-container">
        {processList.map((process) => (
          <div key={process.id} className="process-item">
            <span>{process.name} (ID: {process.id})</span>
            <span>Running Time: {process.running_time_formatted}</span>
            <span>Memory: {process.memory_in_bytes} bytes</span>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;