"""
完美数又称为完全数或完备数，它的所有的真因子（即除了自身以外的因子）的和
（即因子函数）恰好等于它本身。例如：6（$6=1+2+3$）和28（$28=1+2+4+7+14$）
就是完美数。完美数有很多神奇的特性，有兴趣的可以自行了解。
"""
for i in range(3, 10000):
    sum = 0
    for j in (1, i):
        if i % j == 0:
            sum += j
    if sum == i:
        print(i,sum)
        