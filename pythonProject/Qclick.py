import pyautogui
import time
import keyboard

# Установите интервал между кликами в миллисекундах
interval = 600  # 10 мс
auto_clicker_enabled = False

def toggle_auto_clicker():
    global auto_clicker_enabled
    auto_clicker_enabled = not auto_clicker_enabled
    print('Автокликер Включен' if auto_clicker_enabled else 'Автокликер Выключен')

keyboard.add_hotkey('p', toggle_auto_clicker)

try:
    while True:
        if auto_clicker_enabled:
            # keyboard.press('q')
            # keyboard.release('q')
            pyautogui.leftClick()
            keyboard.press('r')
            keyboard.release('r')

            time.sleep(interval)
except KeyboardInterrupt:
    print('Остановлено')