function onEat(event, player, itemStack) {

    // 获取触发事件的玩家对象  
    var player = event.getPlayer();



    var PotionEffect = Java.type('org.bukkit.potion.PotionEffect');
    var PotionEffectType = Java.type('org.bukkit.potion.PotionEffectType');

    var A = Math.floor(Math.random() * 50); //随机效果等级

    var B = Math.floor(Math.random() * 100); //随机效果时间  0-100

    var C = A+1

    let HEALTH_BOOST = new PotionEffect(PotionEffectType.HEALTH_BOOST, 20 * B, A, true, true, true); // 持续60秒，等级2

     // 添加药水效果到玩家
    player.addPotionEffect(HEALTH_BOOST);

    // 发送消息给玩家
    player.sendMessage("§b你获得了等级为§e " + C + " §b的 §e生命提升 §b效果，此效果将持续 §e" + B + "§b 秒。");



    // 运行op指令
    // runOpCommand(player, "effect give " + player.getName() + " health_boost 61 50");



}