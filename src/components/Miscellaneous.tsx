import React from 'react';
import { RegistryEntry } from '../types/registry';

const templateMiscData: RegistryEntry[] = [
 /* {
    id: '1',
    date: '',
    title: ',
    link: '/misc/entry_2',
    daysAgo: 00
  }, */

];

const Miscellaneous: React.FC = () => {
  return (
    <section className="section">
      <h2>
        Miscellaneous
        <a href="/miscellaneous" className="view-all">view all</a>
      </h2>
      
      <ul className="registry-list">
        {templateMiscData.map((entry) => (
          <li key={entry.id} className="registry-item">
            <div className="registry-content">
              <div className="registry-date">[{entry.date}]</div>
              <div className="registry-title">
                <a href={entry.link}>{entry.title}</a>
              </div>
            </div>
            <div className="registry-time">
              {entry.daysAgo} {entry.daysAgo === 1 ? 'day' : 'days'} ago
            </div>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <a href="/miscellaneous">... view older</a>
      </div>
    </section>
  );
};

export default Miscellaneous;
