defmodule Main do
  def solve(data) do
    data
    |> String.split(~r/\R/)
    |> Enum.map(&fullyContains(&1))
    |> Enum.filter(& &1)
    |> length()
  end

  def fullyContains(bothAssignments) do
    [a, b, x, y] =
      bothAssignments
      |> String.split(~r/[,-]/)
      |> Enum.map(&Integer.parse(&1))
      |> Enum.map(&elem(&1, 0))

    cond do
      a <= x and b >= y -> true
      a >= x and b <= y -> true
      true -> false
    end
  end
end

{:ok, data} = File.read("input.txt")

Main.solve(data)
|> IO.inspect()
