import { CardFrame, CategoryContainer } from "@/components/atomic/molecules";

const mockImgIds = [
    {
        text: "Hatsune Miku",
        publicId: "category_hatsune_miku_wa5h8n"
    },
    {
        text: "The Quintessential Quintuplets",
        publicId: "category_the_quintessential_quintuplets_ruqcmu"
    },
    {
        text: "Fate Grand Order",
        publicId: "category_fate_grand_order_ganqtv"
    },
    {
        text: "One Piece",
        publicId: "category_one_piece_srf9sy"
    },
    {
        text: "Spy X Family",
        publicId: "category_spy_x_family_ljrinz"
    },
    {
        text: "Hololive",
        publicId: "category_hololive_b779db"
    },
    {
        text: "Demon Slayer",
        publicId: "category_demon_slayer_bf2fra"
    },
    {
        text: "Overlord",
        publicId: "category_overlord_pj3snc"
    },
    {
        text: "Rezero",
        publicId: "category_rezero_bqhphz"
    },
    {
        text: "Chuyển Sinh Thành Slime",
        publicId: "category_chuyen_sinh_thanh_slime_waeqnb"
    },
    {
        text: "Goddess Of Victory Nikke",
        publicId: "category_goddess_of_victory_nikke_tkf3pm"
    },
    {
        text: "Hunter X Hunter",
        publicId: "category_hunter_x_hunter_e24hjr"
    },
];

export function CategoryCard() {
    return (
        <CardFrame title="SERIES NỔI BẬT">
            <CategoryContainer
                listCategories={mockImgIds}
            />
        </CardFrame>
    )
}