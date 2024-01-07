import time
import random
import pyautogui
import keyboard

# задержка перед выполнением действия
pyautogui.PAUSE = 0.5

while True:
    if keyboard.is_pressed('p'):
        while True:
            print("нажалось")
            for i in range(6):
                pyautogui.mouseDown(button='left')
                keyboard.press('a')
                time.sleep(28.8 + random.random()*1)
                keyboard.release('a')
                pyautogui.mouseUp(button='left')
                keyboard.press('w')
                time.sleep(2 + random.random()*1)
                keyboard.release('w')
                pyautogui.mouseDown(button='left')
                keyboard.press('d')
                time.sleep(28.8 + random.random() * 1)
                keyboard.release('d')
                pyautogui.mouseUp(button='left')
                keyboard.press('w')
                time.sleep(2 + random.random() * 1)
                keyboard.release('w')
            keyboard.press('s')
            time.sleep(14 + random.random() * 1)
            keyboard.release('s')
            keyboard.press('w')
            time.sleep(random.random() * 1)
            keyboard.release('w')
    time.sleep(0.1)
# 155