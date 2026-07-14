export type UserDataType = {
  name: string;
  titles: string[];
  image: string;
  birth: string;
  email: string;

  about: {
    careerStart: string;
    location: {
      city: string;
      country: string;
    };
  };
};

export const USER_DATA: UserDataType = {
  name: "AmirHosein Mohamadi",
  titles: ["Frontend Developer", "Ui Designer"],
  image: "/awmirosen_profile_picture.jpg",
  birth: "2003-01-01",
  email: "mail@awmirosen.ir",
  about: {
    careerStart: "2025-05-26",
    location: {
      city: "Tehran",
      country: "Iran",
    },
  },
};
