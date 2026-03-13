document.addEventListener('DOMContentLoaded', () => {
    const talks = <!--DATA-->;
    const scheduleContainer = document.getElementById('schedule');
    const searchInput = document.getElementById('search-input');

    const schedulePlan = [
        { time: '10:00 AM - 11:00 AM', type: 'talk' },
        { time: '11:00 AM - 11:10 AM', type: 'break', title: 'Coffee Break' },
        { time: '11:10 AM - 12:10 PM', type: 'talk' },
        { time: '12:10 PM - 1:10 PM', type: 'break', title: 'Lunch Break' },
        { time: '1:10 PM - 2:10 PM', type: 'talk' },
        { time: '2:10 PM - 2:20 PM', type: 'break', title: 'Coffee Break' },
        { time: '2:20 PM - 3:20 PM', type: 'talk' },
        { time: '3:20 PM - 3:30 PM', type: 'break', title: 'Coffee Break' },
        { time: '3:30 PM - 4:30 PM', type: 'talk' },
        { time: '4:30 PM - 4:40 PM', type: 'break', title: 'Coffee Break' },
        { time: '4:40 PM - 5:40 PM', type: 'talk' },
    ];

    function renderSchedule(filter = '') {
        scheduleContainer.innerHTML = '';
        let talkIndex = 0;
        const lowerCaseFilter = filter.toLowerCase();

        schedulePlan.forEach(item => {
            if (item.type === 'talk') {
                if (talkIndex < talks.length) {
                    const talk = talks[talkIndex];
                    const hasCategory = talk.categories.some(cat => cat.toLowerCase().includes(lowerCaseFilter));
                    
                    if (filter === '' || hasCategory) {
                        const talkElement = document.createElement('div');
                        talkElement.className = 'schedule-item';
                        talkElement.innerHTML = `
                            <div class="time">${item.time}</div>
                            <h2>${talk.title}</h2>
                            <div class="speakers">${talk.speakers.join(', ')}</div>
                            <p>${talk.description}</p>
                            <div class="categories">
                                ${talk.categories.map(cat => `<span class="category">${cat}</span>`).join('')}
                            </div>
                        `;
                        scheduleContainer.appendChild(talkElement);
                    }
                    talkIndex++;
                }
            } else { // item.type === 'break'
                 if (filter === '') { // Only show breaks when not filtering
                    const breakElement = document.createElement('div');
                    breakElement.className = 'schedule-item break';
                    breakElement.innerHTML = `
                        <div class="time">${item.time}</div>
                        <strong>${item.title}</strong>
                    `;
                    scheduleContainer.appendChild(breakElement);
                }
            }
        });
         if (scheduleContainer.innerHTML === '') {
            scheduleContainer.innerHTML = '<p style="text-align:center;">No talks match your search.</p>';
        }
    }

    searchInput.addEventListener('input', (e) => {
        renderSchedule(e.target.value);
    });

    renderSchedule();
});
