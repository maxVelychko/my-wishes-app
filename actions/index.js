import * as firebase from "firebase";

export const fetchWishes = () => {
    return (dispatch) => {
        const dbRefWishes = firebase.database().ref().child("wishes");

        dbRefWishes.once("value", snapshot => {
            const wishes = [];
            snapshot.forEach(function(childSnapshot) {
                const childData = childSnapshot.val();
                wishes.push({...childData, key: childSnapshot.key});
            });
            dispatch(readFetchedWishes(wishes));
        });

        dbRefWishes.on('child_changed', function(data) {
            dispatch(wishChanged({ key: data.key, ...data.val() }));
        });
    };
};

export const readFetchedWishes = (wishes) => ({
    type: "READ_FETHCHED_WISHES",
    payload: { wishes },
});

export const wishChanged = (wish) => ({
    type: "WISH_CHANGED",
    payload: { wish },
});

export const addWish = (wish) => ({
    type: "ADD_WISH",
    payload: { wish },
});