"""
斐波那契数列

"""

i = int(input("请输入您需要知道的月份:"))
lastCount = 1
currentCount = 1
for j in range(0, i):
    if j > 1:
        momentCount = currentCount
        currentCount += lastCount
        lastCount = momentCount
print(currentCount)