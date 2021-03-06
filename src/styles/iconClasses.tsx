import Cookies from "../../static/icons/Cookies.svg"
import Diamond from "../../static/icons/Diamond.svg"
import GiftWrap from "../../static/icons/GiftWrap.svg"
import Newsletter from "../../static/icons/Newsletter.svg"
import Nib from "../../static/icons/Nib.svg"
import Perfume from "../../static/icons/Perfume.svg"
import Plant from "../../static/icons/Plant.svg"
import Recycle from "../../static/icons/Recycle.svg"
import Return from "../../static/icons/Return.svg"
import Shipping from "../../static/icons/Shipping.svg"
import Tracking from "../../static/icons/Tracking.svg"
import WishlistAbsent from "../../static/icons/WishlistAbsent.svg"

export const iconClasses = `
    .cookies {
        background-image: url(${Cookies});
    }

    .diamond {
        background-image: url(${Diamond});
    }

    .envelope {
        background-image: url(${Newsletter});
    }

    .gift-wrap {
        background-image: url(${GiftWrap});
    }

    .heart {
        background-image: url(${WishlistAbsent});
    }

    .nib {
        background-image: url(${Nib});
    }

    .perfume {
        background-image: url(${Perfume});
    }

    .plant {
        background-image: url(${Plant});
    }

    .recycle {
        background-image: url(${Recycle});
    }

    .return {
        background-image: url(${Return});
    }

    .shipping {
        background-image: url(${Shipping});
    }

    .tracking {
        background-image: url(${Tracking});
    }
`