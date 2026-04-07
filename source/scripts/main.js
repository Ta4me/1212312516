document.addEventListener('DOMContentLoaded', () => {
        const flipCard = document.getElementById('flipCard');
        
        if (flipCard) {
            // Создаем аудио-элемент для звука
            const soundPath = flipCard.dataset.sound;
            let audio = null;
            if (soundPath) {
                audio = new Audio(soundPath);
                audio.preload = 'auto'; // Предварительная загрузка для более быстрого воспроизведения
            }

            // Добавляем слушатель события 'click' (работает и на сенсорных устройствах)
            flipCard.addEventListener('click', () => {
                // Переключаем класс 'is-flipped'
                flipCard.classList.toggle('is-flipped');

                // Воспроизводим звук, если он есть
                if (audio) {
                    audio.currentTime = 0; // Сбрасываем звук, чтобы он проигрывался каждый раз
                    audio.play().catch(e => console.error("Ошибка воспроизведения звука:", e));
                }
            });
        } else {
            console.warn("Элемент с ID 'flipCard' не найден. Убедитесь, что ID правильно указан в HTML.");
        }
    });