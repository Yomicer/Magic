function onWeaponHit(event, player) {

    const damage = event.getDamage();
    player.setHealth(player.getHealth() + (damage * 0.01));

}
