"""
翻转正整数

Vesion: 0.1
Author: 葛晨
"""

num = int(input("请输入一个正整数："))
reversedNum = 0
while num > 0:
    reversedNum = reversedNum * 10 + num % 10
    # num = int(num/10)
    num //= 10
print(reversedNum)
