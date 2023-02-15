import * as Icon from "phosphor-react-native";
export const selectIcon = (name, size, weight, color) => {
    switch (name) {
        case "ArrowRight":
            return (<Icon.ArrowRight size={size} weight={weight} color={color} />)
        case "Airplane":
            return (<Icon.Airplane size={size} weight={weight} color={color} />)
        case "Scroll":
            return (<Icon.Scroll size={size} weight={weight} color={color} />)
        case "Tag":
            return (<Icon.Tag size={size} weight={weight} color={color} />)
        case "Eye":
            return (<Icon.Eye size={size} weight={weight} color={color} />)
        case "Eye-closed":
            return (<Icon.EyeClosed size={size} weight={weight} color={color} />)
        case "Filter":
            return (<Icon.Sliders size={size} weight={weight} color={color} />)
        case "Search":
            return (<Icon.MagnifyingGlass size={size} weight={weight} color={color} />)
        case "Calendar":
            return (<Icon.CalendarBlank size={size} weight={weight} color={color} />)
        case "ArrowLeft":
            return (<Icon.CaretLeft size={size} weight={weight} color={color} />)
        case "1ArrowRight":
            return (<Icon.CaretRight size={size} weight={weight} color={color} />)
        case "ReloadHorario":
            return (<Icon.ArrowClockwise size={size} weight={weight} color={color} />)
        case "ReloadAnti":
            return (<Icon.ArrowCounterClockwise size={size} weight={weight} color={color} />)
        case "Alert":
            return (<Icon.WarningCircle size={size} weight={weight} color={color} />)
        case "Close":
            return (<Icon.XCircle size={size} weight={weight} color={color} />)
        case "Checked":
            return (<Icon.CheckCircle size={size} weight={weight} color={color} />)
        case "Question":
            return (<Icon.Question size={size} weight={weight} color={color} />)
        case "Bell":
            return (<Icon.Bell size={size} weight={weight} color={color} />)
        case "HouseSimple":
            return (<Icon.HouseSimple size={size} weight={weight} color={color} />)
        case "Menu":
            return (<Icon.List size={size} weight={weight} color={color} />)
        case "DotTree":
            return (<Icon.DotsThree size={size} weight={weight} color={color} />)
        case "Trash":
            return (<Icon.Trash size={size} weight={weight} color={color} />)
        case "Gear":
            return (<Icon.Gear size={size} weight={weight} color={color} />)
        case "Cart":
            return (<Icon.ShoppingCart size={size} weight={weight} color={color} />)
        case "Exit":
            return (<Icon.SignOut size={size} weight={weight} color={color} />)
        case "Power":
            return (<Icon.Power size={size} weight={weight} color={color} />)
        case "X":
            return (<Icon.X size={size} weight={weight} color={color} />)
        case "PlusCircle":
            return (<Icon.PlusCircle size={size} weight={weight} color={color} />)
        case "MinusCircle":
            return (<Icon.MinusCircle size={size} weight={weight} color={color} />)
        case "User":
            return (<Icon.User size={size} weight={weight} color={color} />)
        case "UserCircle":
            return (<Icon.UserCircle size={size} weight={weight} color={color} />)
        case "Money":
            return (<Icon.CurrencyCircleDollar size={size} weight={weight} color={color} />)
        case "Truck":
            return (<Icon.Truck size={size} weight={weight} color={color} />)
        case "Download":
            return (<Icon.DownloadSimple size={size} weight={weight} color={color} />)
        case "FolderOpen":
            return (<Icon.FolderOpen size={size} weight={weight} color={color} />)
        case "Folder":
            return (<Icon.Folder size={size} weight={weight} color={color} />)
        case "Facebook":
            return (<Icon.FacebookLogo size={size} weight={weight} color={color} />)
        case "Linkedin":
            return (<Icon.LinkedinLogo size={size} weight={weight} color={color} />)
        case "Instagram":
            return (<Icon.InstagramLogo size={size} weight={weight} color={color} />)
        case "Twitter":
            return (<Icon.TwitterLogo size={size} weight={weight} color={color} />)
        case "Youtube":
            return (<Icon.YoutubeLogo size={size} weight={weight} color={color} />)
        case "Twitch":
            return (<Icon.TwitchLogo size={size} weight={weight} color={color} />)
        case "Tiktok":
            return (<Icon.TiktokLogo size={size} weight={weight} color={color} />)
        case "ClokWize":
            return (<Icon.ClockClockwise size={size} weight={weight} color={color} />)
        case "PencilSimple":
            return (<Icon.PencilSimple size={size} weight={weight} color={color} />)
       

        default:
            break;
    }
}