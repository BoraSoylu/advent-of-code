defmodule Main do
  def solve(data) do
    data
    |> String.split(~r/\R/)
    |> getInitStacks()
  end

  def getInitStacks(input) do
    input
    |> Enum.map(&String.replace(&1, ~r/[][]/, ""))
    |> Enum.map(&String.replace(&1, "    ", "-"))
    |> Enum.map(&String.replace(&1, " ", "-"))
    |> getInitSingleStack()
  end

  def getInitSingleStack(input) do
    input
    |> Enum.map(&String.at(&1, 0))
    |> Enum.filter(&(&1 != "-" and &1 != nil and &1 != "m"))
    |> Enum.join()

    # cond do
    #   char == "-" -> ""
    #   true -> char
    # end
  end
end

{:ok, data} = File.read("input.txt")

Main.solve(data)
|> IO.inspect()
