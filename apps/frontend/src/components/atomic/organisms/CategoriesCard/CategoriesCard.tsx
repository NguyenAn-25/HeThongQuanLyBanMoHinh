import { CardFrame, CategoriesContainer } from "@/components/atomic/molecules";

const mockImgIds = [
    {
        text: "Hatsune Miku",
        path: "hatsune_miku",
        publicId: "category_hatsune_miku_wa5h8n"
    },
    {
        text: "The Quintessential Quintuplets",
        path: "the_quintessential_quintuplets",
        publicId: "category_the_quintessential_quintuplets_ruqcmu"
    },
    {
        text: "Fate Grand Order",
        path: "fate_grand_order",
        publicId: "category_fate_grand_order_ganqtv"
    },
    {
        text: "One Piece",
        path: "one_piece",
        publicId: "category_one_piece_srf9sy"
    },
    {
        text: "Spy X Family",
        path: "spy_x_family",
        publicId: "category_spy_x_family_ljrinz"
    },
    {
        text: "Hololive",
        path: "hololive",
        publicId: "category_hololive_b779db"
    },
    {
        text: "Demon Slayer",
        path: "demon_slayer",
        publicId: "category_demon_slayer_bf2fra"
    },
    {
        text: "Overlord",
        path: "overlord",
        publicId: "category_overlord_pj3snc"
    },
    {
        text: "Rezero",
        path: "rezero",
        publicId: "category_rezero_bqhphz"
    },
    {
        text: "Chuyển Sinh Thành Slime",
        path: "chuyen_sinh_thanh_slime",
        publicId: "category_chuyen_sinh_thanh_slime_waeqnb"
    },
    {
        text: "Goddess Of Victory Nikke",
        path: "goddess_of_victory_nikke",
        publicId: "category_goddess_of_victory_nikke_tkf3pm"
    },
    {
        text: "Hunter X Hunter",
        path: "hunter_x_hunter",
        publicId: "category_hunter_x_hunter_e24hjr"
    },
];

export function CategoriesCard() {
    return (
        <CardFrame title="SERIES NỔI BẬT">
            <CategoriesContainer
                listCategories={mockImgIds}
            />
        </CardFrame>
    )
}