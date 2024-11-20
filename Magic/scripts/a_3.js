function onEat(event, player, itemStack) {

    // 获取触发事件的玩家对象  
    var player = event.getPlayer();


    // 运行op指令
    runOpCommand(player, "effect give " + player.getName() + " invisibility 61 50");



}