# !/usr/bin/python
# coding:utf-8
"""
回文数
"""


def is_palindrom(num):
    temp = num
    total = 0
    while temp > 0:
        total = total * 10 + temp % 10
        temp //= 10
    return total == num


print(is_palindrom(11))
