import { useRecoilState } from "recoil";
import { colorState } from "../../../../atom";
import { Input } from "../../../../components/search/searchTableStyle";

export const ColorRequired = ({ register, errors }) => {
  const [color, setColor] = useRecoilState(colorState);
  return (
    <Input
      {...register("color", { required: true })}
      placeholder="외색을 입력하세요"
      value={color}
      onChange={(e) => setColor(e.target.value)}
      className={errors.color && color.length === 0 ? "error" : null}
    />
  );
};
