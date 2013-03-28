@layout('layouts.application')
@section('content')
<h1>{{ __('company.listing') }}</h1>

<table>
  <tr>
    <th>{{ __('company.name') }}</th>
    <th>{{ __('company.telephone') }}</th>
    <th>{{ __('company.address') }}</th>
    <th>{{ __('company.email') }}</th>
    <th>{{ __('company.website') }}</th>
    <th colspan="3">{{ __('action.actions') }}</th>
  </tr>

  @forelse ($companies as $company)
  <tr>
    <td>{{ $company->name }}</td>
    <td>{{ $company->telephone }}</td>
    <td>{{ $company->address }}</td>
    <td>{{ $company->email }}</td>
    <td>{{ $company->website }}</td>
    <td>{{ HTML::link_to_action('companies@show', __('action.show'), array($company->id)) }}</td>
    <td>{{ HTML::link_to_action('companies@edit', __('action.edit'), array($company->id)) }}</td>
    <td>{{ HTML::link_to_action('companies@destroy', __('action.destroy'), array($company->id), array('class' => 'confirmDelete')) }}</td>
  </tr>
  @empty
  <p>There are no companies yet.</p>
  @endforelse

</table>

<br>
{{ HTML::link_to_action('companies@new', "New Company") }}

@endsection
