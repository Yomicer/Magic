let lastUseTime = 0;
let usageCount = 0;

function onUse(event) {
  const player = event.getPlayer();
  const currentTime = new Date().getTime();
  if (currentTime - lastUseTime < 150000) {
    const remainingTime = Math.ceil((150000 - (currentTime - lastUseTime)) / 1000);
    player.sendTitle("§c§l你干嘛啊~哎呦！", "冷却剩余时间：" + remainingTime+"秒", 10, 40, 10);
    const item = player.getInventory().getItemInMainHand();
    const itemMeta = item.getItemMeta();
    const lore = itemMeta.getLore().slice(0, -2);
    lore.push("§a§l冷§b§l却§c§l剩§d§l余§e§l时§f§l间§2§l :§3§l" +remainingTime+"§4§l秒");
    lore.push("§f§l今§b§l日§e§l全§a§l服§c§l累§d§l积§f§l完§2§l成§2§l "+ usageCount +" §3§l次 §4§l唱 §5§l跳 §6§lRAP §7§l篮§8§l球")
    itemMeta.setDisplayName("§a§lM§b§lU§c§lS§d§lI§e§lC§f§l~ §2§l[§3§l已§4§l完§5§l成§6§l：§7§l "+ usageCount +" §8§l次]"); // 设置物品显示名称
    itemMeta.setLore(lore);
    item.setItemMeta(itemMeta);
    return; 
  }
  player.setFoodLevel(0);
  player.setSaturation(0);
  usageCount++;
  org.bukkit.Bukkit.broadcastMessage("§b§l"+player.getName()+"§e§l完§a§l成§c§l了§b§l第 "+ usageCount +" §3§l次 §4§l唱 §5§l跳 §6§lRAP §7§l篮§8§l球§9§l~");
  

  lastUseTime = currentTime;
  let entities = player.getNearbyEntities(5, 5, 5);
  for (let entity of entities) {
    if (entity instanceof org.bukkit.entity.Chicken && !entity.isAdult()) {
      entity.setAdult();
    }
  }
}
