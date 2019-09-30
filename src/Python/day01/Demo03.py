"""
!花旗骰

CRAPS又称花旗骰，是美国拉斯维加斯非常受欢迎的一种的桌上赌博游戏。该游戏使用两粒骰子，
玩家通过摇两粒骰子获得点数进行游戏。简单的规则是：玩家第一次摇骰子如果摇出了7点或11点
，玩家胜；玩家第一次如果摇出2点、3点或12点，庄家胜；其他点数玩家继续摇骰子，如果玩家
摇出了7点，庄家胜；如果玩家摇出了第一次摇的点数，玩家胜；其他点数，玩家继续要骰子，直
到分出胜负。

"""

from random import randint

money = 1000
while money > 0:
    need_go_on = False
    print("当前余额", money)
    while True:
        dept = float(input("请输入你的赌注:"))
        if 0 < dept <= money:
            break
    num = randint(1, 6) + randint(1, 6)
    if num == 7 or num == 11:
        print("玩家胜利！")
        money += dept
    elif num == 2 or num == 3 or num == 12:
        print("庄家胜利！")
        money -= dept
    else:
        while need_go_on:
            # need_go_on = False
            currentNum = randint(1, 6) + randint(1, 6)
            if currentNum == 7:
                need_go_on = False
                print("庄家胜利！")
                money -= dept
            elif currentNum == num:
                need_go_on = False
                print("玩家胜利！")
                money += dept
            else:
                need_go_on = True
print("您破产了！")