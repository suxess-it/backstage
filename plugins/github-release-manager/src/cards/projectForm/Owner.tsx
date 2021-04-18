/*
 * Copyright 2021 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { useNavigate } from 'react-router';
import { useAsync } from 'react-use';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';

import { CenteredCircularProgress } from '../../components/CenteredCircularProgress';
import { Project } from '../../contexts/ProjectContext';
import { useFormClasses } from './styles';
import { usePluginApiClientContext } from '../../contexts/PluginApiClientContext';
import { useQueryHandler } from '../../helpers/useQueryHandler';

export function Owner({
  username,
  project,
}: {
  username: string;
  project: Project;
}) {
  const formClasses = useFormClasses();
  const navigate = useNavigate();
  const pluginApiClient = usePluginApiClientContext();
  const { getQueryParamsWithUpdates } = useQueryHandler();

  const { loading, error, value } = useAsync(() => pluginApiClient.getOwners());
  const owners = value?.owners ?? [];
  const customOwnerFromUrl = !owners
    .concat(['', username])
    .includes(project.owner);

  return (
    <FormControl className={formClasses.formControl} required error={!!error}>
      {loading ? (
        <CenteredCircularProgress />
      ) : (
        <>
          <InputLabel id="owner-select-label">Owners</InputLabel>
          <Select
            labelId="owner-select-label"
            id="owner-select"
            value={project.owner}
            defaultValue=""
            onChange={event => {
              const { queryParams } = getQueryParamsWithUpdates({
                updates: [
                  { key: 'repo', value: '' },
                  { key: 'owner', value: event.target.value as string },
                ],
              });

              navigate(`?${queryParams}`, { replace: true });
            }}
            className={formClasses.selectEmpty}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>

            <MenuItem value={username}>
              <strong>{username}</strong>
            </MenuItem>

            {!error && customOwnerFromUrl && (
              <MenuItem value={project.owner}>
                <strong>From URL: {project.owner}</strong>
              </MenuItem>
            )}

            {owners.map((orgName, index) => (
              <MenuItem key={`organization-${index}`} value={orgName}>
                {orgName}
              </MenuItem>
            ))}
          </Select>

          {error && (
            <FormHelperText>
              Encountered an error ({error.message})
            </FormHelperText>
          )}

          {!error && project.owner.length === 0 && (
            <>
              <FormHelperText>Select an owner (org or user)</FormHelperText>
              <FormHelperText>
                Custom queries can be made via the query param{' '}
                <strong>owner</strong>
              </FormHelperText>
            </>
          )}
        </>
      )}
    </FormControl>
  );
}
