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
            pyautogui.mouseDown(button='left')
            keyboard.press('d')
            keyboard.press('w')
            time.sleep(120 + random.random()*1)
            keyboard.release('d')
            keyboard.press('a')
            time.sleep(120 + random.random()*1)
            for i in range(7):
                keyboard.release('a')
                keyboard.press('d')
                time.sleep(120 + random.random() * 1)
                keyboard.release('d')
                keyboard.press('a')
                time.sleep(120 + random.random() * 1)
            keyboard.release('a')
            keyboard.release('d')
            keyboard.release('w')
            pyautogui.mouseUp(button='left')
            keyboard.press('s')
            time.sleep(16+random.random() * 1)
            keyboard.release('s')
    time.sleep(0.1)
# 130