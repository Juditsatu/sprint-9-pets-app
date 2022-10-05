export interface UserSitter {
  profilePicture:   string;
  name:             string;
  titleDesc:        string;
  desc:             string;
  address:          string;
  verifiedUser:     boolean;
  price:            number;
  dogSitter?:       boolean;
  catSitter?:       boolean;
  rating?:          number;
  like?:            boolean;
}
