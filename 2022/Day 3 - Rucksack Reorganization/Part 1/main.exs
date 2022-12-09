defmodule Main do
  def solve(data) do
    data
    |> String.split(~r/\R/)
    |> Enum.map(&String.split_at(&1, div(String.length(&1), 2)))
    |> Enum.map(&%{:x => to_charlist(elem(&1, 0)), :y => to_charlist(elem(&1, 1))})
    |> Enum.map(&Enum.find(&1.x, fn x -> x in &1.y end))
    |> Enum.map(&itemValue(&1))
    |> Enum.sum()

    #   Enum.find(&elem(&1,0)))

    # |> Enum.map(&Enum.find(elem(&1, 0), elem(&1, 0) in elem(&1, 1)))

    # |> Enum.map(&(to_charlist(elem(&1, 0)) -- to_charlist(elem(&1, 1))))
  end

  def itemValue(v) do
    cond do
      v > 96 -> v - 96
      true -> v - 64 + 26
    end
  end
end

{:ok, data} = File.read("input.txt")

Main.solve(data)
|> IO.inspect()
