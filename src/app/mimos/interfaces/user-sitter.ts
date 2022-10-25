export interface UserSitter {
  _id:         string;
  name:        string;
  email:       string;
  password:    string;
  favorites:   any[];
  isSitter:    boolean;
  address:     string;
  postalCode:  string;
  city:        string;
  coords:      number[];
  title:       string;
  desc:        string;
  price:       number;
  serviceTime: number;
  catType:     boolean;
  dogType:     boolean;
  like:        boolean;
  imgUrl?:     string;
  __v:         number;
}
