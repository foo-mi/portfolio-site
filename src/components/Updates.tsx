import React from 'react';
import { RegistryEntry } from '../types/registry';

const templateUpdatesData: RegistryEntry[] = [
 /* {
    id: '1',
    date: '',
    title: '',
    link: '/updates/update_1',
    daysAgo: 00
  },

  },
  */
];

const Updates: React.FC = () => {
  return (
    <section className="section">
      <h2>
        Updates
        <a href="/updates" className="view-all">view all</a>
      </h2>
      
      <ul className="registry-list">
        {templateUpdatesData.map((entry) => (
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
        <a href="/updates">... view older</a>
      </div>
    </section>
  );
};

export default Updates;
