import { CardFrame, CategoryGroupsContainer } from "../../molecules";

const categoryGroups = [
    {
        title: "Game Prize Figure",
        quantity: 4123,
        imgIds: ["game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy"]
    },
    {
        title: "Game Prize Figure",
        quantity: 4123,
        imgIds: ["game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy"]
    },
    {
        title: "Game Prize Figure",
        quantity: 4123,
        imgIds: ["game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy"]
    },
    {
        title: "Game Prize Figure",
        quantity: 4123,
        imgIds: ["game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy"]
    },
    {
        title: "Game Prize Figure",
        quantity: 4123,
        imgIds: ["game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy"]
    },
    {
        title: "Game Prize Figure",
        quantity: 4123,
        imgIds: ["game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy"]
    },
    {
        title: "Game Prize Figure",
        quantity: 4123,
        imgIds: ["game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy"]
    },
    {
        title: "Game Prize Figure",
        quantity: 4123,
        imgIds: ["game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy"]
    },
]

export function CategoryGroupsCard() {
    return (
        <CardFrame title="DANH MỤC NỔI BẬT">
            <CategoryGroupsContainer
                categoryGroups={categoryGroups}
            />
        </CardFrame>
    )
}