function onEat(event, player, itemStack) {

    // 获取触发事件的玩家对象  
    var player = event.getPlayer();

    var A = Math.floor(Math.random() * 32) + 1;

    var effect_item = "";

    switch (A) {
        case 1:
            effect_item = "absorption 60 50";
            break;
        case 2:
            effect_item = "blindness 60 50";
            break;
        case 3:
            effect_item = "fire_resistance 60 50";
            break;
        case 4:
            effect_item = "glowing 60 50";
            break;
        case 5:
            effect_item = "haste 60 50";
            break;
        case 6:
            effect_item = "health_boost 60 50";
            break;
        case 7:
            effect_item = "hunger 60 50";
            break;
        case 8:
            effect_item = "instant_damage 1 50";
            break;
        case 9:
            effect_item = "instant_health 60 50";
            break;
        case 10:
            effect_item = "invisibility 60 50";
            break;
        case 11:
            effect_item = "jump_boost 60 50";
            break;
        case 12:
            effect_item = "levitation 60 50";
            break;
        case 13:
            effect_item = "luck 60 50";
            break;
        case 14:
            effect_item = "mining_fatigue 60 50";
            break;
        case 15:
            effect_item = "nausea 60 50";
            break;
        case 16:
            effect_item = "night_vision 60 50";
            break;
        case 17:
            effect_item = "poison 60 50";
            break;
        case 18:
            effect_item = "regeneration 60 50";
            break;
        case 19:
            effect_item = "resistance 60 50";
            break;
        case 20:
            effect_item = "saturation 60 50";
            break;
        case 21:
            effect_item = "slowness 60 50";
            break;
        case 22:
            effect_item = "speed 60 50";
            break;
        case 23:
            effect_item = "strength 60 50";
            break;
        case 24:
            effect_item = "unluck 60 50";
            break;
        case 25:
            effect_item = "water_breathing 60 50";
            break;
        case 26:
            effect_item = "weakness 60 50";
            break;
        case 27:
            effect_item = "wither 60 50";
            break;
        case 28:
            effect_item = "slow_falling 60 50";
            break;
        case 29:
            effect_item = "levitation 60 50";
            break;
        case 30:
            effect_item = "conduit_power 60 50";
            break;
        case 31:
            effect_item = "bad_omen 60 50";
            break;
        case 32:
            effect_item = "hero_of_the_village 60 50";
            break;
    }

    // 运行op指令
    runOpCommand(player, "effect give " + player.getName() + " " + effect_item);



}