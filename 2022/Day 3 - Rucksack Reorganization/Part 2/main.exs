defmodule Main do
  def solve(data) do
    data
    |> String.split(~r/\R/)
    |> Enum.chunk_every(3)
    |> Enum.map(&getBadge(&1))
    |> Enum.map(&itemValue(Enum.at(&1, 0)))
    |> Enum.sum()
  end

  def getBadge(group) do
    test =
      group
      |> Enum.map(&to_charlist(&1))

    Enum.at(test, 0)
    |> Enum.map(&Enum.find(Enum.at(test, 1), nil, fn x -> x == &1 end))
    |> Enum.map(&Enum.find(Enum.at(test, 2), nil, fn x -> x == &1 end))
    |> Enum.filter(&(&1 !== nil))
    |> Enum.uniq()
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
