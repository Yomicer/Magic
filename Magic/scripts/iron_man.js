// 当物品被右键时
function onUse(event) {
    // 定义一个字符串变量item，其值为一个特定的物品生成指令，此示例代码是用于给予一个生成铁傀儡的苦力怕刷怪蛋  
    var item = "iron_golem_spawn_egg"; 
    //         材质(此为苦力怕刷怪蛋)            生成的实体(此为生成铁傀儡)

    // 获取触发事件的玩家对象  
    var player = event.getPlayer();

    // 获取该玩家的背包对象  
    var inv = player.getInventory();

    // 获取玩家主手中的物品  
    var itemInMainHand = inv.getItemInMainHand();

    // 你也可以这样写
    // var itemInMainHand = player.getInventory().getItemInMainHand();

    // 判断玩家主手中是否有物品，且该物品的数量大于0  
    if (itemInMainHand != null && itemInMainHand.getAmount() > 0) {
        // 将转换数量设为玩家主手中物品的数量  
        // var amount = itemInMainHand.getAmount();  

        // 将转换数量设为一个
        var amount = 1;

        // 将玩家主手中的物品数量设置为已有物品数量 - 1，即消耗了一个物品 
        itemInMainHand.setAmount(itemInMainHand.getAmount() - 1);

        // 运行op指令
        runOpCommand(player, "give " + player.getName() + " " + item + " " + amount);
    }
}