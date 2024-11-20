function onUse(event) {

 
    var player = event.getPlayer();



    // 运行op指令
    runOpCommand(player, "say "+" 正在使用斐济杯");
    runOpCommand(player, "effect give " + player.getName() + " instant_damage 1 2");



}