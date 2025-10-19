document.addEventListener('DOMContentLoaded', () => {
    // блок с временем
    document.querySelectorAll('.item-expert__times').forEach(timeContainer => {
        const timeMoreBtn = timeContainer.querySelector('.time-choice__time--more');

        function updateTimeHandlers() {
            timeContainer.querySelectorAll('.time-choice__time:not(.time-choice__time--more)').forEach(btn => {
                btn.onclick = () => {
                    timeContainer.querySelectorAll('.time-choice__time').forEach(bt => bt.classList.remove('time-choice__time--active'));
                    btn.classList.add('time-choice__time--active');
                };
            });
        }
        updateTimeHandlers();

        if (timeMoreBtn) {
            timeMoreBtn.addEventListener('click', () => {
                timeContainer.querySelectorAll('.time-choice__time').forEach(btn => {
                    btn.style.display = 'inline-block';
                });
                timeMoreBtn.style.display = 'none';
                updateTimeHandlers();
            });
        }
    });
    // блок с датами
    document.querySelectorAll('.date-choice__dates').forEach(dateContainer => {
        const dateButtons = dateContainer.querySelectorAll('.date-choice__date');
        const nextDateBtn = dateContainer.closest('.date-choice')
        ? dateContainer.closest('.date-choice').querySelector('.date-choice__next')
        : null;
        let startIdx = 0;
        const visibleCount = 4;

        function updateDatesView() {
            if (window.innerWidth <= 1240) {
                dateButtons.forEach(btn => btn.style.display = '');
            } else {
                dateButtons.forEach((btn, i) => {
                    if (i >= startIdx && i < startIdx + visibleCount) {
                        btn.style.display = '';
                    } else {
                        btn.style.display = 'none';
                    }
                });
            }
        }

        if (nextDateBtn) {
            nextDateBtn.addEventListener('click', () => {
                if (startIdx + visibleCount < dateButtons.length) {
                    startIdx += 1;
                    updateDatesView();
                } else {
                    startIdx = 0;
                    updateDatesView();
                }
            });
            }

        dateButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                dateButtons.forEach(bt => bt.classList.remove('date-choice__date--active'));
                btn.classList.add('date-choice__date--active');
            });
        });

        updateDatesView();
        window.addEventListener('resize', updateDatesView);
    });
});
