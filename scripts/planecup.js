let usageCount = 0;


function onUse(event) {

  let player = event.getPlayer();
  let item = player.getInventory().getItemInMainHand();
  let itemMeta = item.getItemMeta();
  let randomChance = Math.random();
  let world = player.getWorld();
  let eyeLocation = player.getEyeLocation();
  usageCount++;

  const lore = itemMeta.getLore().slice(0, -1);
  lore.push("§e§l你已使用了:" + usageCount + "次"); // 设置物品描述
  itemMeta.setDisplayName("§d§l圣杯 §e§l[已使用："+ usageCount +"次]"); // 设置物品显示名称
  itemMeta.setLore(lore);
  item.setItemMeta(itemMeta);

  if (randomChance < 0.05) {

    let ExperienceOrb =  world.spawn(eyeLocation, org.bukkit.entity.ExperienceOrb);
    ExperienceOrb.setCustomName("精验球");
    ExperienceOrb.setExperience(100); // 设置经验值数量

    org.bukkit.Bukkit.broadcastMessage("§b§l"+player.getName()+"§a§l奖§9§l励§c§l了§d§l"+ usageCount +"§e§l次§f§l,§f§l终§2§l于§3§l出§4§l来§5§l了§6§l~§7§l~§8§l~");
    usageCount = 0;
  }

  if (player.getFoodLevel() <= 0) {
    player.setHealth(0);
    org.bukkit.Bukkit.broadcastMessage("§b§l"+player.getName() + "§4§l死§c§l于§e§l奖§a§l励§d§l过§6§l度§5§l~");   
  } else {
    player.setFoodLevel(player.getFoodLevel() - 2);
    player.setSaturation(player.getSaturation() - 2);
  }



}